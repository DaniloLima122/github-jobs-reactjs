import React, { useState } from 'react';

import { Card, Badge, Button, Collapse } from "react-bootstrap";

import ReactMarkdown from "react-markdown";

export default function Job({ job }) {

    const [open, setOpen] = useState(false)
    return (
        <Card className="my-2">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>

                        </Card.Title>

                        <Card.Subtitle clasName="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                    </div>

                    <img className="d-none d-md-block" height="40" alt={job.company} src={job.company_logo} />

                </div>
                <div>
                    <ReactMarkdown source={job.how_to_apply} />
                </div>

                <Card.Text>
                    <Button variant="primary" 
                    
                        onClick={() => setOpen(!open)}>
                        {open ? "Esconder detalhes" : "Ver detalhes" }
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>

            </Card.Body>
        </Card>
    )
}